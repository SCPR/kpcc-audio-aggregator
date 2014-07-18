class AudioCollection < ActiveRecord::Base

  STATUSES = ['draft', 'killed', 'published']

  validates_inclusion_of :status, :in => STATUSES,
        :message => "{{value}} must be either: #{STATUSES.join ', '}"

  has_many :audio_stories
  after_initialize :init

  def init
    self.status ||= 'draft'
  end

  


end
