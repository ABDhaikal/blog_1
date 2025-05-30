import ReactMarkdown, { Components } from "react-markdown";
import rehypeRaw from "rehype-raw";

interface MarkdownProps {
   content: string;
}

const Markdown: React.FC<MarkdownProps> = ({ content }) => {
   const renderers: Components = {
      h2: ({ children }) => <h2 className="text-xl font-bold">{children}</h2>,
      p: ({ children }) => <p className="text-md ">{children}</p>,
      ol: ({ children }) => <p className="text-md font-bold ">{children}</p>,
      li: ({ children }) => <p className="text-md font-light">{children}</p>,
      strong: ({ children }) => <strong className="font-medium">{children}</strong>,
   };
   return (
      <ReactMarkdown rehypePlugins={[rehypeRaw]} components={renderers}>
         {content}
      </ReactMarkdown>
   );
};

export default Markdown;
