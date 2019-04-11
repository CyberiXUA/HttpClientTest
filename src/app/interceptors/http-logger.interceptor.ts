import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http/http';
import { Observable } from 'rxjs';

export class HttpLoggerInterceptor implements HttpInterceptor {
	public intercept(req: HttpRequest<any>, next: HttpHandler):
		Observable<HttpEvent<any>> {
		console.log('HttpLoggerInterceptor');
		console.log('request: ', req);

		return next.handle(req);
	}
}
