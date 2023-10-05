type Props = {
    title: string,
    text: string,
    url: string,
    footnote: string
  };


export default function Blog_section({ title, text, url, footnote }: Props) {
  return (
    <article class="p-6 bg-white rounded-lg border border-gray-200 shadow-md">
      <div class="flex justify-between items-center mb-5 text-gray-500">
        <span class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded">
          <svg
            class="mr-1 w-3 h-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
              clip-rule="evenodd"
            >
            </path>
            <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z">
            </path>
          </svg>
          Article
        </span>
      </div>
      <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
        <a href={url}>
          {title}
        </a>
      </h2>
      <p class="mb-5 font-light text-gray-500">
      {text}
      </p>
      <div class="flex justify-between items-center">
        <div class="flex items-center space-x-4">
          <span class="font-medium">
            {footnote}
          </span>
        </div>
        <a
          href={url}
          class="inline-flex items-center font-medium text-primary-600 hover:underline"
        >
          Read more
          <svg
            class="ml-2 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            >
            </path>
          </svg>
        </a>
      </div>
    </article>
  );
}
