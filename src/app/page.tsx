import FileSystem from "./components/FileSystem";
import { NODES } from "./constants/folders";

export default function Home() {
	return (
		<main className="p-10">
			<ul>
				{NODES.map(node => (
					<FileSystem node={node} key={node.name} />
				))}
			</ul>
		</main>
	);
}
