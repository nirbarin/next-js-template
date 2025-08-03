import config from "@/config.json"
import { redirect } from "next/navigation"

export default function ReportPage() {
	const { username, repo } = config

	if (!username || !repo) {
		throw new Error('GitHub username and repo must be configured')
	}

	const issueUrl = `https://github.com/${username}/${repo}/issues/new`

	redirect(issueUrl)
}
