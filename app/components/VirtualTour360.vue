<template>
  <div ref="viewerContainer" class="virtual-tour-container" />
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import type { TourNode } from '~/composables/useTourData'

interface PSVNode {
  id: string
  name: string
}

interface PSVMarker {
  id: string
}

interface Props {
  height?: string
  showControls?: boolean
  enableGyroscope?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  height: '100vh',
  showControls: true,
  enableGyroscope: true,
})

const viewerContainer = ref<HTMLElement | null>(null)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let viewer: any = null
const { nodes, startNodeId } = useTourData()

const initViewer = async () => {
  if (!viewerContainer.value) return

  try {
    const [
      { Viewer },
      { VirtualTourPlugin },
      { MarkersPlugin },
    ] = await Promise.all([
      import('@photo-sphere-viewer/core'),
      import('@photo-sphere-viewer/virtual-tour-plugin'),
      import('@photo-sphere-viewer/markers-plugin'),
    ])

    const shouldEnableGyroscope = props.enableGyroscope && globalThis.DeviceOrientationEvent
    const gyroscopeModule = shouldEnableGyroscope
      ? await import('@photo-sphere-viewer/gyroscope-plugin')
      : null

    const plugins: unknown[] = [
      [VirtualTourPlugin, {
        dataMode: 'client',
        positionMode: 'manual',
        renderMode: '3d',
        nodes: nodes.map((node: TourNode) => ({
          id: node.id,
          panorama: node.panorama,
          thumbnail: node.thumbnail,
          name: node.name,
          caption: node.caption,
          links: node.links,
          markers: node.markers,
        })),
        startNodeId,
        preload: true,
        transitionOptions: {
          showLoader: true,
          speed: '20rpm',
          fadeIn: true,
          rotation: true,
        },
      }],
      [MarkersPlugin],
    ]

    if (gyroscopeModule) {
      plugins.push(gyroscopeModule.GyroscopePlugin)
    }

    viewer = new Viewer({
      container: viewerContainer.value,
      touchmoveTwoFingers: true,
      mousewheelCtrlKey: false,
      defaultYaw: 0,
      defaultPitch: 0,
      navbar: props.showControls ? [
        'zoom',
        'move',
        'caption',
        'fullscreen',
      ] : false,
      plugins,
    })

    const virtualTourPlugin = viewer.getPlugin(VirtualTourPlugin)

    virtualTourPlugin?.addEventListener('node-changed', ({ node }: { node: PSVNode }) => {
      // Here you can emit events, update analytics, etc.
    })

    const markersPlugin = viewer.getPlugin(MarkersPlugin)
    markersPlugin?.addEventListener('select-marker', ({ marker }: { marker: PSVMarker }) => {
      // You can show a modal, side panel, etc.
    })

  } catch (error) {
    console.error('Error initializing Photo Sphere Viewer:', error)
  }
}

const destroyViewer = () => {
  if (viewer) {
    viewer.destroy()
    viewer = null
  }
}

onMounted(() => {
  initViewer()
})

onBeforeUnmount(() => {
  destroyViewer()
})
</script>

<style scoped>
.virtual-tour-container {
  width: 100%;
  height: v-bind(height);
  position: relative;
}

:deep(.custom-marker) {
  font-size: 2rem;
  cursor: pointer;
  transition: transform 0.2s;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5));
}

:deep(.custom-marker:hover) {
  transform: scale(1.2);
}

:deep(.psv-loader) {
  background: rgba(0, 0, 0, 0.8);
}

:deep(.psv-navbar) {
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
}

:deep(.psv-caption) {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  font-size: 1.2rem;
  padding: 10px;
}

:deep(.psv-caption-content) {
  padding: 0;
}
</style>

<style>
@import '@photo-sphere-viewer/core/index.css';
@import '@photo-sphere-viewer/virtual-tour-plugin/index.css';
@import '@photo-sphere-viewer/markers-plugin/index.css';
</style>
