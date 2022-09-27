import { Heading } from "@chakra-ui/react";


interface HeadProps {
    title: string;
    button: false,
    buttonTitle: string,
    buttonLink: string,
    buttonText: 'Button',
    buttonHref: '#',
}

export default function HeaderComponents({ title, button,buttonLink,buttonText,buttonHref}: HeadProps) {
    return (
        <>
            <Heading>
                <title>{title}</title>
            </Heading>
            <header className="bg-white shadow">
                <div className="sm:flex sm:justify-between">
                    <div className="max-w-7xl mx-auto py-6 px- sm:px-6 lg:px-8 ml-0">
                        <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
                    </div>
                    {button && (
                        <div className="inline-flex rounded-md">
                            <a
                                href={buttonHref}
                                className="inline-flex items-center justify-center mr-5 mt-5 px-5 h-10 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                            >
                                {buttonText}
                            </a>
                        </div>
                    )}
                </div>
            </header>
        </>

    );

}