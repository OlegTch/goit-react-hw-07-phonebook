import { toast } from 'react-toastify';
toast('🦄 Wow so easy!', {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
});
export const deleteError = toast.error('contact deletion error');
