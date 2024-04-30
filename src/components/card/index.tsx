
interface PropsCard {
    icon: string,
    name:string,
    numbers:string
}

const Card = (props:PropsCard) => {
    return (
        <div className={'card'}>
            <div className={"card_icon"}>
                <img src={props.icon} alt="logo card"/>
            </div>
            <div className={"card_content"}>
                <div>{props.numbers}</div>
                <div>{props.name}</div>
            </div>

        </div>
    );
};

export default Card;