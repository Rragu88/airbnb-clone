function Card(props) {
    let badgeText = '';
    if (props.card.openSpots === 0) {
        badgeText = 'SOLD OUT';
    } else if (props.card.location === 'Online') {
        badgeText = 'ONLINE';
    }

    return (
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img className="profile-img" src={`/assets/${props.card.coverImg}`} alt="card-img" />
            <div className="reviews">
                <img className="star-img" src="/assets/star.png" alt="star" />
                <span>{props.card.stats.rating} ({props.card.stats.reviewCount}) - {props.card.location}</span>
            </div>
            <span>{props.card.title}</span>
            <span><strong>From ${props.card.price}</strong> / person</span>
        </div>
    )
  }
  
  export default Card;