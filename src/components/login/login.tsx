
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { AuthChangeEvent, AuthTokenResponsePassword, Session } from '@supabase/supabase-js'
import { useContext, useEffect, useState } from 'react'
import { DatabaseClientContext } from '../../service/database-context'
import "./login.css"


// const supabase = createClient('https://ddfwnakhvceijxhnyukd.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRkZnduYWtodmNlaWp4aG55dWtkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY3MTE4NzEsImV4cCI6MjA1MjI4Nzg3MX0.DdFexrO3IQsJXEjB8jrFTFhhgA0E6NQuJljIzCVUdu4')

export default function App() {
    const [session, setSession] = useState<Session | null>(null)
    const databaseClient = useContext(DatabaseClientContext);

    useEffect(() => {
        databaseClient.auth.getSession().then((resp: AuthTokenResponsePassword) => {
            setSession(resp.data.session);
        })

        const {
            data: { subscription },
        } = databaseClient.auth.onAuthStateChange((_event: AuthChangeEvent, session: Session | null) => {
            setSession(session)
        })

        return () => subscription.unsubscribe()
    }, [databaseClient])

    if (!session) {
        return (
            <div className='login'>
                <div style={{ "minWidth": "90vw" }}>
                    <Auth supabaseClient={databaseClient} appearance={{ theme: ThemeSupa }} />
                </div>
            </div>)
    }
    else {
        return (<div>Logged in!</div>)
    }
}

