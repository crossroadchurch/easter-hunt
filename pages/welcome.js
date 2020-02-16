import { useState, useEffect } from 'react'
import { useLocalStorage } from 'react-use'
import { useRouter } from 'next/router'
import { X } from 'react-feather'
import uuid from 'uuid/v4'

import firebase from 'firebase/app'
import 'firebase/firestore'
import { useCollectionOnce } from 'react-firebase-hooks/firestore'

import initFirebase from '../lib/firebase'
import Page from '../components/page'
import Egg from '../components/egg'

initFirebase()
const db = firebase.firestore()

export default () => {
  const router = useRouter()
  const [teamName, setTeamName] = useState('')
  const [team, setTeam] = useLocalStorage('team')
  const [error, setError] = useState(null)

  const [snapshot] = useCollectionOnce(firebase.firestore().collection('teams'))

  useEffect(() => {
    if (snapshot) {
      snapshot.forEach((document) => {
        if (teamName === document.data().name) {
          setError('Whoops! That team name already taken. Please try again.')
        }
      })
    }
  }, [snapshot, teamName])

  function createTeam() {
    const id = uuid()

    if (!error) {
      const teamData = {
        name: teamName,
        id
      }

      // Write to database
      db.collection('teams')
        .doc(id)
        .set(teamData)
        .then(() => {
          // Write to localstorage
          setTeam(teamData)
          router.push('/play')
        })
    }
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
          {error ? (
            <div className="w-full bg-orange-500 text-white p-2 rounded mb-4 inline-flex items-center justify-between">
              {error}
              <button
                onClick={() => {
                  setError(null)
                }}
              >
                <X />
              </button>
            </div>
          ) : null}
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
