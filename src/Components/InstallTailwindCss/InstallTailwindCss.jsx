import CodeSnippet from "../CodeSnipat/CodeSnipat"
import SubTitle from "../SubTitle/SubTitle"
import Title from "../Title/Title"

const InstallTailwindCss = () => {
    const codeString = `
        npm create vite@latest my-project -- --template react
        cd my-project
    `;
    const installTailwind = `
        npm install -D tailwindcss postcss autoprefixer
        npx tailwindcss init -p
    `
    const configureTailwind = `
        /** @type {import('tailwindcss').Config} */
        export default {
        content: [
            "./index.html",
            "./src/**/*.{js,ts,jsx,tsx}",
        ],
        theme: {
            extend: {},
        },
        plugins: [],
        }
    `;
    const indexCss = `
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
    `
    const app = `
    export default function App() {
        return (
          <h1 className="text-3xl font-bold underline">
            Hello world!
          </h1>
        )
      }
    `

    return (
        <div>
            <div className="flex justify-between gap-5 lg:flex-row md:flex-row flex-col lg:my-5 md:my-3 my-2">
                <div className="flex-1">
                    <Title titleText={'Quick Start - Setting up Tailwind CSS in a Vite project.'} />
                    <SubTitle subTitle={"Start by creating a new Vite project if you don’t have one set up already. The most common approach is to use Create Vite."} />
                </div>
                <div className="flex-1">
                    <CodeSnippet codeString={codeString} />
                </div>
            </div>
            <div className="flex justify-between gap-5 lg:flex-row md:flex-row flex-col lg:my-5 md:my-3 my-2">
                <div className="flex-1">
                    <Title titleText={'Install Tailwind CSS'} />
                    <SubTitle subTitle={"Install tailwindcss and its peer dependencies, then generate your tailwind.config.js and postcss.config.js files."} />
                </div>
                <div className="flex-1">
                    <CodeSnippet codeString={installTailwind} />
                </div>
            </div>
            <div className="flex justify-between gap-5 lg:flex-row md:flex-row flex-col lg:my-5 md:my-3 my-2">
                <div className="flex-1">
                    <Title titleText={'Configure your template paths'} />
                    <SubTitle subTitle={"Add the paths to all of your template files in your tailwind.config.js file."} />
                </div>
                <div className="flex-1">
                    <CodeSnippet codeString={configureTailwind} />
                </div>
            </div>
            <div className="flex justify-between gap-5 lg:flex-row md:flex-row flex-col lg:my-5 md:my-3 my-2">
                <div className="flex-1">
                    <Title titleText={'Add the Tailwind directives to your CSS'} />
                    <SubTitle subTitle={"Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file."} />
                </div>
                <div className="flex-1">
                    <CodeSnippet codeString={indexCss} />
                </div>
            </div>
            <div className="flex justify-between gap-5 lg:flex-row md:flex-row flex-col lg:my-5 md:my-3 my-2">
                <div className="flex-1">
                    <Title titleText={'Start your build process'} />
                    <SubTitle subTitle={"Run your build process with npm run dev."} />
                </div>
                <div className="flex-1">
                    <CodeSnippet codeString={'npm run dev'} />
                </div>
            </div>
            <div className="flex justify-between gap-5 lg:flex-row md:flex-row flex-col lg:my-5 md:my-3 my-2">
                <div className="flex-1">
                    <Title titleText={'Start using Tailwind in your project'} />
                    <SubTitle subTitle={"Start using Tailwind’s utility classes to style your content."} />
                </div>
                <div className="flex-1">
                    <CodeSnippet codeString={app} />
                </div>
            </div>
        </div>
    )
}

export default InstallTailwindCss