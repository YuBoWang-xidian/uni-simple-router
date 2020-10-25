import {err} from './warn'
import {InstantiateConfig, LifeCycleConfig} from '../options/config'

export const mpPlatformReg = /(^mp-weixin$)|(^mp-baidu$)|(^mp-alipay$)|(^mp-toutiao$)|(^mp-qq$)|(^mp-360$)/g;

export const baseConfig:InstantiateConfig = {
    h5: {
        aliasCoverPath: false,
        rewriteFun: true,
        paramsToQuery: false,
        vueRouterDev: false,
        useUniConfig: true,
        keepUniIntercept: false,
        vueNext: false,
        replaceStyle: false,
        resetStyle: () => JSON.parse('{}'),
        mode: 'hash',
        base: '/',
        linkActiveClass: 'router-link-active',
        linkExactActiveClass: 'router-link-exact-active',
        scrollBehavior: (to:any, from:any, savedPostion:Function) => savedPostion,
        fallback: true
    },
    APP: {
        holdTabbar: true,
        loddingPageStyle: () => JSON.parse('{"backgroundColor":"#FFF"}'),
        loddingPageHook: (view:any) => { plus.navigator.closeSplashscreen(); view.show(); },
        animation: { animationType: 'pop-in', animationDuration: 300 }
    },
    platform: 'h5',
    keepUniOriginNav: false,
    debugger: false,
    encodeURI: true,
    routerBeforeEach: (to, from, next) => { next() },
    routerAfterEach: (to, from) => {},
    routerErrorEach: (error, router) => { err(error, router, true) },
    routes: [
        {
            path: '/choose-location'
        },
        {
            path: '/open-location'
        },
        {
            path: '/preview-image'
        }
    ]
}

export const lifeCycle:LifeCycleConfig = {
    beforeHooks: [],
    afterHooks: [],
    routerBeforeHooks: [],
    routerAfterHooks: [],
    routerErrorHooks: []
};

