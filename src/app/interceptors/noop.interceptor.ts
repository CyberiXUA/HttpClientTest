import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http/http';
import { Observable } from 'rxjs';

export class NoopInterceptor implements HttpInterceptor {
  public intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
	  console.log('NoopInterceptor');

	  return next.handle(req);
  }
}
