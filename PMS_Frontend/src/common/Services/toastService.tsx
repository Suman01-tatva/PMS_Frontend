// src/components/ExampleComponent.js
import toastService from '../../utils/toastr';

function ExampleComponent() {
  const handleSuccess = () => {
    toastService.success('Operation completed successfully!');
  };

  const handleError = () => {
    toastService.error('Something went wrong!');
  };

  const handleWarning = () => {
    toastService.warning('warning message!');
  };

  const handleInfo = () => {
    toastService.info('Here is some information.');
  };

  return (
    <div className="d-flex flex-column gap-2">
      <button className="btn btn-success" onClick={handleSuccess}>
        Show Success Toast
      </button>
      <button className="btn btn-danger" onClick={handleError}>
        Show Error Toast
      </button>
      <button className="btn btn-warning" onClick={handleWarning}>
        Show Warning Toast
      </button>
      <button className="btn btn-info" onClick={handleInfo}>
        Show Info Toast
      </button>
    </div>
  );
}

export default ExampleComponent;