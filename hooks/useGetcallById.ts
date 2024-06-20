import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk"
import { useEffect, useState } from "react"

export const useGetCallById = (id: string | string[]) => {
  const [call, setCall] = useState<Call | undefined>()
  const [isCallLoading, setIsCallLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  const client = useStreamVideoClient()

  useEffect(() => {
    if (!client) return

    const loadCall = async () => {
      try {
        const { calls } = await client.queryCalls({
          filter_conditions: {
            id,
          },
        })
        if (calls.length > 0) setCall(calls[0])
        setIsCallLoading(false)
      } catch (err) {
        setError(err as Error)
        setIsCallLoading(false)
      }
    }

    loadCall()
  }, [client, id])

  return { call, isCallLoading, error }
}
