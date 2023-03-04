import { AppDispatch, RootState } from '@/redux/configStore';
import { shallowEqual, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = (state) => useSelector(state, shallowEqual);
