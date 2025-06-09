import '../checkout/checkout-item.styles.scss';

const CheckOutItem = ({ checkOutItem }) => {
    const { imageUrl, name, price, quantity } = checkOutItem;
    return (
        <div className='checkout-item-container'>
            <img src={imageUrl} alt={`${name}`} />
            <span className='name'>{name}</span>
            <span> X {quantity} X </span>
            <span>{price}</span>
            <span>X</span>
        </div>
    )
}

export default CheckOutItem;