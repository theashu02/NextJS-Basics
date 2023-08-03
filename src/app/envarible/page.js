// this console log only wprk in dev build
//so for production build we need to write condition

export default function page() {
    console.log(process.env.NODE_ENV);
  return (
    <main>
      {
        process.env.NODE_ENV === 'development'? 
        <h1>you are on development build</h1>  
        :
        <h1>Environmetal varible in next</h1>
      }
      <div>Environmetal varible in Next</div>
    </main>
  );
}
