export const NODES = [
	{
		name: "Root",
		nodes: [
			{
				name: "Movies",
				nodes: [
					{
						name: "Action",
						nodes: [
							{
								name: "2000s",
								nodes: [{ name: "Movie.mp4" }]
							},
							{ name: "2010s", nodes: [] }
						]
					},
					{
						name: "Comedy",
						nodes: [{ name: "2000s", nodes: [{ name: "Movie.mp4" }] }]
					},
					{
						name: "Drama",
						nodes: [{ name: "2000s", nodes: [] }]
					}
				]
			},
			{
				name: "Music",
				nodes: [
					{ name: "Rock", nodes: [{ name: "Song.mp4" }] },
					{ name: "Classical", nodes: [] }
				]
			},
			{ name: "Pictures", nodes: [] },
			{
				name: "Documents",
				nodes: []
			},
			{ name: "passwords.txt" }
		]
	}
];
