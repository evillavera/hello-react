function Comments(props) {
    return (
        <div style = {{backgroundColor:'purple', height: '200pt'}}>
            <h5 style={{marginBottom: 0}}>Comments</h5>
            <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                <div>
                    <img className="comments-image" src={props.dog}/>
                    <p>Person's Info here</p>
                </div>
                <div>
                    <p>Person's Comment here</p>
                </div>
            </div>
            <div className="comments-center-div">
                <button className="comments-button" onClick={props.onShow}> {props.showAddComment ? 'Remove form' : 'Want to add a comment?'}</button>
            </div>
        </div>
    )
}

export default Comments
