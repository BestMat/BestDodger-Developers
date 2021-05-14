# ©2021 - BestDodger VDC and server CLI for Ruby
require 'sinatra'
require 'json'
  def createServer(obj)
    obj_json = JSON.parse(obj)
    set :protection, :except => :frame_options
    set :bind, '0.0.0.0'
    set :port, obj_json["port"]

    get '/' do
      if obj_json["type"] == "localText"
        obj_json["localPageText"]
      end
    end
  end
  
  createServer('{"server_name": "NP", "port": 8080, "type": "localText", "localPageText": "<h1>Hello Ruby!</h1>"}')
