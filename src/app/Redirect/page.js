import {redirect} from 'next/navigation'

// if you access this page you sill redierdirect to home page

export default function page() {
    redirect('/')
  return (
    <div>
      <h1>Hello it is redierct page</h1>
    </div>
  );
}
