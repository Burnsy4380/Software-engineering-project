function loadPage (component) {
// '@' is aliased to src/components
return () => import(/* webpackChunkName: "[request]" */`@/pages/${component}.vue`)
}
export default [
{ path: '/', component: loadPage('Home') },
{ path: '/blog', component: loadPage('Blog') }
]