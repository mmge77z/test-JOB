export default function App() {
    return (
        <div className="App">
            <Chmod permission={"rwxrwxr-x"} answer={'775'} /> {/*775*/}
            <Chmod permission={"-r-w------"} answer={'600'} /> {/*600*/}
            <Chmod permission={"r-wr----r"} answer={'644'} /> {/*644*/}
            <Chmod permission={"-rwxrwxr-x"} answer={'775'} /> {/*775*/}
            <Chmod permission={"-r-x---r-x"} answer={'505'} /> {/*505*/}
            <Chmod permission={"-rw-rw-rw-"} answer={'666'} /> {/*666*/}
            <Chmod permission={"-r--r--r--"} answer={'444'} /> {/*444*/}
            <Chmod permission={"---x--x--x"} answer={'111'} /> {/*111*/}
            <Chmod permission={"-rw-------"} answer={'600'} /> {/*600*/}
            <Chmod permission={"-rw-rw-r--"} answer={'644'} /> {/*644*/}
        </div>
    );
}

const Chmod = (props) => {
    const { permission,answer } = props;
    function convert(input) {
        // code here.
        const result = "transform me";
        return `${result} is ${answer === result ? 'true' : 'false'}`;
    }

    return (
        <>
            <p>
                {`[ ${permission} ] =  `}
                {convert(permission)}
            </p>
        </>
    );
};
