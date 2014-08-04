class AudioCollection < ActiveRecord::Base

  STATUSES = ['draft', 'killed', 'published']

  validates_inclusion_of :status, :in => STATUSES,
        :message => "{{value}} must be either: #{STATUSES.join ', '}"

  has_many :collection_stories
  has_many :audio_stories, :through => :collection_stories
  accepts_nested_attributes_for :audio_stories
  accepts_nested_attributes_for :collection_stories

  after_initialize :init

  def init
    self.status ||= 'draft'
  end

end
