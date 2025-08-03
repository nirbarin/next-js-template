import config from "@/config.json"
import { redirect } from "next/navigation"

export default function ReportPage() {
	const { username, repo } = config
	const issueUrl = `https://github.com/${username}/${repo}/issues/new`

	redirect(issueUrl)
}
