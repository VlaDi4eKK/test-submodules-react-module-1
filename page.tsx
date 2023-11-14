import { useCallback } from "react"
import { useNavigate } from "react-router-dom"

import Button from "../../components/shared/button"

function Module1() {
  const navigate = useNavigate()

  const handleOpenStartPage = useCallback(() => {
    navigate("/")
  }, [navigate])

  return (
    <div className="flex h-screen flex-col">
      <div className="m-auto">
        <h1 className="text-red mx-auto text-3xl font-bold underline">Module 1 from release v1</h1>
        <Button type="secondary" onClick={handleOpenStartPage} className="mx-auto">
          Go to menu
        </Button>
      </div>
    </div>
  )
}

export default Module1
