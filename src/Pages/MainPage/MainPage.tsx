import { changeButton } from '../../store/appSlice'
import { useAppDispatch, useAppSelector } from '../../store/reduxHooks'

export const MainPage = () => {
  const isButton = useAppSelector((state) => state.app.button)
  const dispatch = useAppDispatch()
  const toChangeButton = () => {
    dispatch(changeButton())
  }
  return (
    <div>
      <button onClick={toChangeButton}>
        {isButton ? 'its not button' : 'its button'}
      </button>
    </div>
  )
}
