import DashboardLayout from "@/layout/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
const BashPrompt = () => import(/* webpackChunkName: "dashboard" */"@/pages/BashPrompt.vue");
const Profile = () => import(/* webpackChunkName: "common" */ "@/pages/Profile.vue");
const Aliases = () => import(/* webpackChunkName: "common" */"@/pages/Aliases.vue");
const CustomFunctions = () => import(/* webpackChunkName: "common" */ "@/pages/CustomFunctions.vue");
const MoreConfig = () => import(/* webpackChunkName: "common" */ "@/pages/MoreConfig.vue");
const TableList = () => import(/* webpackChunkName: "common" */ "@/pages/TableList.vue");
// TODO: Name should not be hardcoded.
const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/bash-prompt",
    children: [
      {
        path: "bash-prompt",
        name: "Bash Prompt",
        component: BashPrompt
      },
      {
        path: "profile",
        name: "about me",
        component: Profile
      },
      {
        path: "aliases",
        name: "aliases",
        component: Aliases
      },
      {
        path: "custom-functions",
        name: "custom functions",
        component: CustomFunctions
      },
      {
        path: "more-config",
        name: "more config",
        component: MoreConfig
      }
    ]
  },
  { path: "*", component: NotFound },
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
