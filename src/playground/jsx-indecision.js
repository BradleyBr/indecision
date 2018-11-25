// JSX - JavaScript XML

const firstObject = {
    title: 'Indecision App',
    subTitle: 'This is some info',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault()

    const option = e.target.elements.option.value
    if (option) {
        firstObject.options.push(option)
        e.target.elements.option.value = ''
        render()
    }
}

const removeAll = () => {
    firstObject.options = []
    render()
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * firstObject.options.length)
    const option = firstObject.options[randomNum]
    alert(option)
}

const appRoot = document.querySelector('#app')

const render = () => {
    const template = (
        <div>
            <h1>{firstObject.title}</h1>
            {firstObject.subTitle && <p>{firstObject.subTitle}</p>}
            <p>{firstObject.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button disabled={firstObject.options.length === 0} onClick={onMakeDecision}>What should I do</button>
            <button onClick={removeAll}>Remove All</button>
            <ol>
                {
                    firstObject.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    )
    ReactDOM.render(template, appRoot)
}



render()
