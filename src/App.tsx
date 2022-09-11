import React from 'react'
import FloatingWhatsApp from './Components/FloatingWhatsApp'

export default function App() {
  return (
    <div className="App">
      <FloatingWhatsApp
        phoneNumber="123456789"
        accountName="Foo"
        allowClickAway
        notification
        notificationDelay={60000} // 1 minute
        notificationSound
      />
    </div>
  )
}
