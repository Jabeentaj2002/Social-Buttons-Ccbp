const Button = props => {
  //  Write your code here.
  const {buttonText} = props
  return <button className={`button ${className}`}>{buttonText}</button>
}

const element = (
  //  Write your code here.
  <div class='bg-container'>
    <h1>Social Buttons</h1>
    <div class='buttonContainer'>
      <Button buttonText='Like' className='likeButton' />
      <Button buttonText='Comment' className='CommentButton' />
      <Button buttonText='Share' className='shareButton' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
