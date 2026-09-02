import { useEffect } from 'react'

export function useVideoAutopause() {
  useEffect(() => {
    const videos = Array.from(document.querySelectorAll<HTMLVideoElement>('video'))
    const onPlay = (event: Event) => {
      videos.forEach((video) => {
        if (video !== event.target) video.pause()
      })
    }
    videos.forEach((video) => video.addEventListener('play', onPlay))
    return () => videos.forEach((video) => video.removeEventListener('play', onPlay))
  })
}
