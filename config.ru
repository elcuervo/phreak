use Rack::Static, :root => ".", :urls => %w[/], :try => ['.js']
run lambda{ |env| [ 404, { 'Content-Type'  => 'text/html' }, ['404 - page not found'] ] }
