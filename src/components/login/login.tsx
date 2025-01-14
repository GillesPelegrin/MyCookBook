
// import { Auth } from '@supabase/auth-ui-react'
// import { ThemeSupa } from '@supabase/auth-ui-shared'
// import { createClient } from '@supabase/supabase-js'
// import { useEffect, useState } from 'react'
import "./login.css"


// const supabase = createClient('https://ddfwnakhvceijxhnyukd.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRkZnduYWtodmNlaWp4aG55dWtkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY3MTE4NzEsImV4cCI6MjA1MjI4Nzg3MX0.DdFexrO3IQsJXEjB8jrFTFhhgA0E6NQuJljIzCVUdu4')

export default function App() {
    // const [session, setSession] = useState(null)

    // useEffect(() => {
    //     // supabase.auth.getSession().then(({ data: { session } }) => {
    //         setSession(session)
    //     })

    //     const {
    //         data: { subscription },
    //     } = supabase.auth.onAuthStateChange((_event, session) => {
    //         setSession(session)
    //     })

    //     return () => subscription.unsubscribe()
    // }, [])

    // if (!session) {
    //     return (
    //         <div className='login'>
    //             <div style={{"minWidth": "40vw"} }>
    //                 <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />
    //             </div>
    //         </div>)
    // }
    // else {
    //     return (<div>Logged in!</div>)
    // }
}

