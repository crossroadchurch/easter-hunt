import { useState } from 'react'
import { useLocalStorage } from 'react-use'
import uuid from 'uuid/v4'
import { useRouter } from 'next/router'

import Page from '../components/page'
import Egg from '../components/egg'

export default () => {
  const router = useRouter()
  const [teamName, setTeamName] = useState('')
  const [team, setTeam] = useLocalStorage('team')

  function createTeam() {
    const id = uuid()
    setTeam({
      name: teamName,
      id
    })
    router.push('/play')
  }

  return (
    <Page title="Welcome">
      <header className="max-w-xl mx-auto p-4 py-8 mt-4 text-center">
        <div className="flex flex-col justify-center items-center">
          <Egg id="10" size="16" />
          <h1 className="font-bold text-3xl mt-2">Team Name</h1>
          <p className="text-gray-600">Please choose a team name</p>
        </div>
      </header>
      <main className="max-w-xl mx-auto p-4">
        <form>
          <label>
            <span className="hidden">Team Name</span>
            <input
              type="text"
              name="team_name"
              onChange={(e) => setTeamName(e.target.value)}
              value={teamName}
              placeholder="(e.g. Egg Hunters)"
              className="w-full mb-8 transition-colors duration-75 ease-in-out py-2 px-1 border-b-2 focus:border-teal-300 focus:bg-gray-100 rounded-top"
            />
          </label>
          <button
            onClick={(e) => {
              e.preventDefault()
              createTeam()
            }}
            className="w-full py-2 bg-teal-200 font-medium rounded-full"
          >
            Ready to Play!
          </button>
        </form>
      </main>
    </Page>
  )
}
