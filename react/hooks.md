# React - Хуки

1. Какими хукими пользовался?

2. Расскажи про [useEffect](https://learn-reactjs.ru/core/hooks/effect-hook)
    * Как воспроизвести поведение componentWillUnmount
    
3. Написать компонент, который выводит количество секунд со своего первого рендера
    ```typescript jsx
   const Timer = () => {
       const [seconds, setSeconds] = useState(0);
           
       useEffect(() => {
           const timer = setInterval(() => setSeconds(prev => prev + 1), 1000)
           
           return () => clearInterval(timer);
       }, [])
       
       return (<div>{seconds}</div>)
   } 
   ```
    
    