import {createRouter, createWebHistory} from "vue-router"
import index from '@/pages/IndexPage'
import SingerPage from "@/pages/SingerPage";
import SingerInfo from "@/pages/SingerInfo";
import MusicPlay from "@/pages/MusicPlay";
import PlayListDetail from "@/pages/PlayListDetail";

const ArtistsList = () => import("@/pages/index/musicList/ArtistsList");
const RankingList = () => import("@/pages/index/musicList/RankingList");
const PlayList = () => import("@/pages/index/musicList/PlayList");

const routes = [
    {
        path: '/',
        name: 'index',
        component: index,
        redirect: '/playList',
        children: [
            {
                path: '/playList',
                name: 'PlayList',
                component: PlayList
            },
            {
                path: '/rankingList',
                name: 'RankingList',
                component: RankingList
            },
            {
                path: '/artistsList',
                name: 'ArtistsList',
                component: ArtistsList
            },
        ]
    }, {
        path: '/singer',
        name: 'singer',
        component: SingerPage,
    }, {
        path: '/singerInfo',
        name: 'singerInfo',
        component: SingerInfo,
        props: route => ({id: route.query.id})
    }, {
        path: '/musicPlay',
        name: 'musicPlay',
        component: MusicPlay,
        props: route => ({id: route.query.id})
    },{
        path: '/playListDetail/:id',
        name: 'playListDetail',
        component: PlayListDetail,
        props: true
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;