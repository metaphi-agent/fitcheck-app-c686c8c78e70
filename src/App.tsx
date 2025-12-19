import { useState } from 'react'
import { Mic } from 'lucide-react'

function App() {
  const [isListening, setIsListening] = useState(false)

  const suggestions = [
    '"Going to a dinner date"',
    '"Meeting friends for brunch"',
    '"Heading to work"'
  ]

  const handleMicClick = () => {
    setIsListening(!isListening)
    // In a real app, this would trigger voice recognition
    console.log('Mic clicked:', !isListening ? 'listening' : 'stopped')
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="w-full max-w-md mx-auto">
        {/* Main Content Container */}
        <div className="flex flex-col items-center space-y-12">

          {/* Header Section */}
          <div className="text-center space-y-4">
            <h1 className="text-6xl font-normal tracking-tight">
              fitcheck
            </h1>
            <p className="text-lg text-[#9CA3AF]">
              your best fit, every time
            </p>
          </div>

          {/* Suggestions Section */}
          <div className="w-full space-y-6">
            <p className="text-center text-[#9CA3AF] text-base">
              Try saying:
            </p>

            <div className="flex flex-col items-center space-y-4">
              {suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className="text-[#D1D5DB] text-lg text-center px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors cursor-pointer"
                >
                  {suggestion}
                </div>
              ))}
            </div>
          </div>

          {/* Microphone Button Section */}
          <div className="flex flex-col items-center space-y-4 pt-8">
            <button
              onClick={handleMicClick}
              className={`relative w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 ${
                isListening
                  ? 'bg-red-500 shadow-lg shadow-red-500/50 scale-110'
                  : 'bg-white hover:bg-gray-100 hover:scale-105'
              }`}
              aria-label="Tap to speak"
            >
              <Mic
                className={`w-10 h-10 ${isListening ? 'text-white' : 'text-black'}`}
                strokeWidth={2}
              />

              {isListening && (
                <span className="absolute -inset-2 rounded-full border-2 border-red-500 animate-ping opacity-75"></span>
              )}
            </button>

            <p className="text-sm text-[#9CA3AF]">
              {isListening ? 'Listening...' : 'Tap to speak'}
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App