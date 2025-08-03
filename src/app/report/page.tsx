import config from "@/config.json"
import { redirect } from "next/navigation"

/**
 * Redirects the user to the GitHub "new issue" page for the configured repository.
 *
 * This server component performs an immediate redirect upon invocation and does not render any UI.
 */
export default function ReportPage() {
	const { username, repo } = config

	if (!username || !repo) {
		throw new Error('GitHub username and repo must be configured')
	}

	const issueUrl = `https://github.com/${username}/${repo}/issues/new`

	redirect(issueUrl)
}
