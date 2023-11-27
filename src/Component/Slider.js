import React, {Component} from 'react';

const imgUrl = [
    "https://img.freepik.com/free-photo/fresh-vegetables-fruits-healthy-eating-organic-variety-generated-by-artificial-intelligence_25030-60646.jpg?t=st=1700758970~exp=1700762570~hmac=359106d3e1fa80e0c12f7c56c717875f7dffc93bebc916e1128527c88a1a1a99&w=1060",
    "https://img.freepik.com/free-photo/mixed-summer-fruits-grocery-stands_114579-11525.jpg?w=1380&t=st=1700671108~exp=1700671708~hmac=0c9181bb39ce7133b40c12abd08a585d8891b143b1c74f90ffb735a408b93e89",
    "https://img.freepik.com/free-photo/ordered-composition-baking-tools-top-view_23-2150096473.jpg?w=996&t=st=1700759502~exp=1700760102~hmac=0e17546ea66bbc1e3acdaa464a2bcda9f9f6b1a0ceab4ca30475423bddfaf9eb",
    "https://img.freepik.com/premium-photo/woman-pointing-meat-display_1134-11559.jpg?w=1380",
    "https://img.freepik.com/premium-photo/vending-machine-with-stickers-table-background-garage-studio-shooting_941466-3403.jpg?w=1060"
];


const ImageSlide = ({ url }) => {
    const styles = {
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width:'100%',
         height:'80%',
        marginBottom:'184px',
    };

    return (
        <div className="image-slide" style={styles}></div>
    );
};



class Slider extends Component{
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0
        }
    };

    componentDidMount () {
        let timeID= setInterval( ()=> {
            let current = this.state.currentIndex;
            current += 1;
            current %= 4;
            this.setState ({
                currentIndex: current
            })
        }, 2000);
    }

    render() {
        return (
            <div className="slider">
                <ImageSlide url = { imgUrl[this.state.currentIndex] }/>
            </div>
        );
    }
}


export {Slider}

