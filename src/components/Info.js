function Info(props) {
    return (
        <div className = 'info' >
            <div className='info-box'>
                <img className='info-map'src={props.mapInfo} />
                <p>Address here</p>
            </div>
            <div className= 'info-message'>
                <h4>Farewell Neighbors...</h4>
                <p>Message here </p>
            </div>
        </div>
    )
}

export default Info
