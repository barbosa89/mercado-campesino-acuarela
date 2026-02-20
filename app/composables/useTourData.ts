export interface TourNode {
    id: string
    name: string
    panorama: string
    thumbnail?: string
    caption?: string
    description?: string
    links: TourLink[]
    markers?: TourMarker[]
}

export interface TourLink {
    nodeId: string
    position: {
        yaw: number
        pitch: number
    }
    linkOffset?: {
        yaw?: number
        pitch?: number
    }
}

export interface TourMarker {
    id: string
    position: {
        yaw: number
        pitch: number
    }
    html?: string
    tooltip?: string
    data?: Record<string, unknown>
}

export const useTourData = () => {
    const nodes: TourNode[] = [
        {
            id: 'escena-1',
            name: 'Escena 1',
            panorama: '/panoramas/escena-1.jpg',
            thumbnail: '/thumbnails/escena-1.jpg',
            caption: 'Bienvenido al Tour Virtual',
            description: 'Punto de inicio del recorrido',
            links: [
                { nodeId: 'escena-2', position: { yaw: 0, pitch: 0 } },
                { nodeId: 'escena-22', position: { yaw: Math.PI / 2, pitch: 0 } },
            ],
            markers: [],
        },
        {
            id: 'escena-2',
            name: 'Monumento',
            panorama: '/panoramas/escena-2.jpg',
            thumbnail: '/thumbnails/escena-2.jpg',
            caption: 'Puerta de entrada en tapia pisada con mirador',
            links: [
                { nodeId: 'escena-1', position: { yaw: 0, pitch: 0 } },
                { nodeId: 'escena-4', position: { yaw: Math.PI, pitch: 0 } },
            ],
            markers: [],
        },
        {
            id: 'escena-4',
            name: 'Mirador del monumento',
            panorama: '/panoramas/escena-4.jpg',
            thumbnail: '/thumbnails/escena-4.jpg',
            caption: 'Mirador del monumento con vista al lago',
            links: [
                { nodeId: 'escena-2', position: { yaw: 0, pitch: 0 } },
                { nodeId: 'escena-5', position: { yaw: Math.PI, pitch: 0 } },
            ],
            markers: [],
        },
        {
            id: 'escena-5',
            name: 'Sección norte',
            panorama: '/panoramas/escena-5.jpg',
            thumbnail: '/thumbnails/escena-5.jpg',
            caption: 'Primeros pasos en el mercado',
            links: [
                { nodeId: 'escena-4', position: { yaw: Math.PI, pitch: 0 } },
                { nodeId: 'escena-6', position: { yaw: 0, pitch: 0 } },
            ],
            markers: [],
        },
        {
            id: 'escena-6',
            name: 'Cafeterías y bebidas',
            panorama: '/panoramas/escena-6.jpg',
            thumbnail: '/thumbnails/escena-6.jpg',
            caption: 'Café y bebidas típicas',
            links: [
                { nodeId: 'escena-5', position: { yaw: Math.PI, pitch: 0 } },
                { nodeId: 'escena-7', position: { yaw: 0, pitch: 0 } },
            ],
            markers: [],
        },
        {
            id: 'escena-7',
            name: 'Comercios',
            panorama: '/panoramas/escena-7.jpg',
            thumbnail: '/thumbnails/escena-7.jpg',
            caption: 'Artesanías, ropa y más',
            links: [
                { nodeId: 'escena-6', position: { yaw: Math.PI, pitch: 0 } },
                { nodeId: 'escena-8', position: { yaw: 0, pitch: 0 } },
            ],
            markers: [],
        },
        {
            id: 'escena-8',
            name: 'Sección noroccidental',
            panorama: '/panoramas/escena-8.jpg',
            thumbnail: '/thumbnails/escena-8.jpg',
            caption: 'Parqueadero interno',
            links: [
                { nodeId: 'escena-7', position: { yaw: Math.PI, pitch: 0 } },
                { nodeId: 'escena-9', position: { yaw: 0, pitch: 0 } },
            ],
            markers: [],
        },
        {
            id: 'escena-9',
            name: 'Coliseo al aire libre',
            panorama: '/panoramas/escena-9.jpg',
            thumbnail: '/thumbnails/escena-9.jpg',
            caption: 'El coliseo con los restaurantes alrededor',
            links: [
                { nodeId: 'escena-8', position: { yaw: Math.PI, pitch: 0 } },
                { nodeId: 'escena-10', position: { yaw: 0, pitch: 0 } },
            ],
            markers: [],
        },
        {
            id: 'escena-10',
            name: 'Monumento del chivo',
            panorama: '/panoramas/escena-10.jpg',
            thumbnail: '/thumbnails/escena-10.jpg',
            caption: 'Popular monumento del chivo con vista al lago, ideal para fotos y juegos infantiles',
            links: [
                { nodeId: 'escena-9', position: { yaw: Math.PI, pitch: 0 } },
                { nodeId: 'escena-11', position: { yaw: 0, pitch: 0 } },
            ],
            markers: [],
        },
        {
            id: 'escena-11',
            name: 'Mirador del lago',
            panorama: '/panoramas/escena-11.jpg',
            thumbnail: '/thumbnails/escena-11.jpg',
            caption: 'Mirador del lago con juegos mecánicos infantiles',
            links: [
                { nodeId: 'escena-10', position: { yaw: Math.PI, pitch: 0 } },
                { nodeId: 'escena-12', position: { yaw: 0, pitch: 0 } },
            ],
            markers: [],
        },
        {
            id: 'escena-12',
            name: 'Bares y restaurantes',
            panorama: '/panoramas/escena-12.jpg',
            thumbnail: '/thumbnails/escena-12.jpg',
            caption: 'Bares y restaurantes con comida típica',
            links: [
                { nodeId: 'escena-11', position: { yaw: Math.PI, pitch: 0 } },
                { nodeId: 'escena-13', position: { yaw: 0, pitch: 0 } },
            ],
            markers: [],
        },
        {
            id: 'escena-13',
            name: 'Pasillo de cafeterías y bares',
            panorama: '/panoramas/escena-13.jpg',
            thumbnail: '/thumbnails/escena-13.jpg',
            caption: 'Pasillo de cafeterías y bares con vista al lago',
            links: [
                { nodeId: 'escena-12', position: { yaw: Math.PI, pitch: 0 } },
                { nodeId: 'escena-14', position: { yaw: 0, pitch: 0 } },
            ],
            markers: [],
        },
        {
            id: 'escena-14',
            name: 'Sección suroccidental',
            panorama: '/panoramas/escena-14.jpg',
            thumbnail: '/thumbnails/escena-14.jpg',
            caption: 'Sección suroccidental con juegos infantiles y vista al lago',
            links: [
                { nodeId: 'escena-13', position: { yaw: Math.PI, pitch: 0 } },
                { nodeId: 'escena-15', position: { yaw: 0, pitch: 0 } },
            ],
            markers: [],
        },
        {
            id: 'escena-15',
            name: 'Pasillo de comercios de artesanías',
            panorama: '/panoramas/escena-15.jpg',
            thumbnail: '/thumbnails/escena-15.jpg',
            caption: 'Pasillo de comercios de artesanías',
            links: [
                { nodeId: 'escena-14', position: { yaw: Math.PI, pitch: 0 } },
                { nodeId: 'escena-16', position: { yaw: 0, pitch: 0 } },
            ],
            markers: [],
        },
        {
            id: 'escena-16',
            name: 'Sección sur',
            panorama: '/panoramas/escena-16.jpg',
            thumbnail: '/thumbnails/escena-16.jpg',
            caption: 'Sección sur',
            links: [
                { nodeId: 'escena-15', position: { yaw: Math.PI, pitch: 0 } },
                { nodeId: 'escena-17', position: { yaw: 0, pitch: 0 } },
            ],
            markers: [],
        },
        {
            id: 'escena-17',
            name: 'Sección central',
            panorama: '/panoramas/escena-17.jpg',
            thumbnail: '/thumbnails/escena-17.jpg',
            caption: 'Sección central con las ventas de arepas de choclo',
            links: [
                { nodeId: 'escena-16', position: { yaw: Math.PI, pitch: 0 } },
                { nodeId: 'escena-18', position: { yaw: 0, pitch: 0 } },
            ],
            markers: [],
        },
        {
            id: 'escena-18',
            name: 'Sección oriental',
            panorama: '/panoramas/escena-18.jpg',
            thumbnail: '/thumbnails/escena-18.jpg',
            caption: 'Sección oriental con restaurantes de comida típica',
            links: [
                { nodeId: 'escena-17', position: { yaw: Math.PI, pitch: 0 } },
                { nodeId: 'escena-19', position: { yaw: 0, pitch: 0 } },
            ],
            markers: [],
        },
        {
            id: 'escena-19',
            name: 'Pasillo de restaurantes de comida típica',
            panorama: '/panoramas/escena-19.jpg',
            thumbnail: '/thumbnails/escena-19.jpg',
            caption: 'Pasillo de restaurantes de comida típica',
            links: [
                { nodeId: 'escena-18', position: { yaw: Math.PI, pitch: 0 } },
                { nodeId: 'escena-20', position: { yaw: 0, pitch: 0 } },
            ],
            markers: [],
        },
        {
            id: 'escena-20',
            name: 'Vista del parqueadero principal',
            panorama: '/panoramas/escena-20.jpg',
            thumbnail: '/thumbnails/escena-20.jpg',
            caption: 'Vista del parqueadero principal y pasillo de restaurantes',
            links: [
                { nodeId: 'escena-19', position: { yaw: Math.PI, pitch: 0 } },
                { nodeId: 'escena-21', position: { yaw: 0, pitch: 0 } },
            ],
            markers: [],
        },
        {
            id: 'escena-21',
            name: 'Zona de baños al sur',
            panorama: '/panoramas/escena-21.jpg',
            thumbnail: '/thumbnails/escena-21.jpg',
            caption: 'Zona de baños al sur',
            links: [
                { nodeId: 'escena-20', position: { yaw: Math.PI, pitch: 0 } },
                { nodeId: 'escena-22', position: { yaw: 0, pitch: 0 } },
            ],
            markers: [],
        },
        {
            id: 'escena-22',
            name: 'Parqueadero principal',
            panorama: '/panoramas/escena-22.jpg',
            thumbnail: '/thumbnails/escena-22.jpg',
            caption: 'Parqueadero principal',
            links: [
                { nodeId: 'escena-21', position: { yaw: Math.PI, pitch: 0 } },
                { nodeId: 'escena-1', position: { yaw: 0, pitch: 0 } },
            ],
            markers: [],
        },
    ]

    const getTourNodes = () => nodes

    const getNodeById = (id: string) => {
        return nodes.find(node => node.id === id)
    }

    const startNodeId = 'escena-1'

    return {
        nodes,
        getTourNodes,
        getNodeById,
        startNodeId,
    }
}
