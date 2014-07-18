module KpccProgramImporter

  class << self

    def sync_all_things_considered
      program_hash = KpccApiHelper::Episodes.all_things_considered

      added = []

      program_hash['episodes'].each do |episode|

        episode['segments'].reject { |s|
          AudioStory.exists?(source: "NPR", article_id:s['id']) || s['audio'].count == 0
        }.each do |episode_segment|
    
          audio_story = AudioStory.new(
            :source       => "NPR",
            :program      => "All Things Considered",
            :article_id   => episode_segment['id'],
            :url          => episode_segment['public_url'],
            :title        => episode_segment['title'],
            :audio_url    => episode_segment['audio'].first['url'],
            :duration     => episode_segment['audio'].first['duration'],
            :time_stamp   => episode_segment['audio'].first['uploaded_at']
          )
  
          if audio_story.save
            added.push audio_story
            puts "AudioStory saved: #{audio_story.title}"
          else
            puts "Failed to save AudioStory"
          end
        end # each segment
  
        added
      end #each episode
    end

  end
end