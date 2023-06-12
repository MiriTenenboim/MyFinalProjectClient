export default function interval(){

   useEffect(() => {
        const interval = setInterval(() => {
        console.log('This will run every second!');
        }, 1000);
        return () => clearInterval(interval);
    }, []);
}
