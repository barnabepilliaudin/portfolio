import Legal from "@components/Legal"
import NotFound from "@components/NotFound"
import Resume from "@components/Resume"
import {
	createRootRoute,
	createRoute,
	createRouter,
} from "@tanstack/react-router"

import App from "@/App"
import { ROUTES } from "@/constants"

const rootRoute = createRootRoute({ notFoundComponent: NotFound })

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

const legalRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: ROUTES.legal,
	component: Legal,
})

const routeTree = rootRoute.addChildren([homeRoute, resumeRoute, legalRoute])

export const router = createRouter({ routeTree })
