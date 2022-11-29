class MessagesController < ApplicationController
  def index
    @message = Message.find(Message.ids.sample)

    render json: @message
  end
end
