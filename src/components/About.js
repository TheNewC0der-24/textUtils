import React from 'react'

export default function About() {
    return (
        <>
            <div className='container'>
                <h1 className='text mb-5'>about us.</h1>
                <div className="card border-dark mb-5">
                    <div className="card-body text-dark">
                        <h5 className="card-title">What is textUtils?</h5>
                        <p className="card-text">textUtils gives you a way to analyze your text quickly and efficiently. Apart from counting words
                            and characters, our online editor can help you to
                            improve writing style i.e., you can change the
                            text from lowercase to UPPERCASE or vise-versa,
                            and, optionally, help you to Remove Extra Spaces
                            and Reverse the text. To check word count, simply
                            place your cursor into the text box and start
                            typing. You'll see the number of characters and
                            words increase or decrease as you type, delete,
                            and edit them. You can also copy and paste text
                            from another program over into the online editor.
                            <br />
                            <br />
                            textUtils is a <strong>free</strong> tool.
                            <br />
                            <br />
                            <strong className='text-danger'> Tip: </strong> <span className='text-danger'>Bookmark this page now.</span>

                            <br />
                            <br />

                            Knowing the word count of a text can be important.
                            For example, if an author has to write a minimum
                            or maximum amount of words for an article, essay,
                            report, story, book, paper, you name it.
                            textUtil will help to make sure its word count
                            reaches a specific requirement or stays within a
                            certain limit.

                            In the Details overview you can see the
                            average speaking and reading time for your
                            text, while Reading Level is an indicator of
                            the education level a person would need in
                            order to understand the words you're using.
                            <br />
                            <br />
                            <em>Hope you like this application :)</em>
                        </p>
                    </div>
                </div>
            </div>

            <footer>
                <div className="container">
                    <div className="credits text-center">
                        © Copyright <strong><span>textUtils</span></strong>. 2022
                    </div>
                </div>

            </footer>

        </>
    )
}