import Resume from "@components/Resume"
import {
	createRootRoute,
	createRoute,
	createRouter,
} from "@tanstack/react-router"

import App from "@/App"
import { ROUTES } from "@/constants"

const rootRoute = createRootRoute()

const homeRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: ROUTES.home,
	component: App,
})

const resumeRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: ROUTES.resume,
	component: Resume,
})

const routeTree = rootRoute.addChildren([homeRoute, resumeRoute])

export const router = createRouter({ routeTree })
