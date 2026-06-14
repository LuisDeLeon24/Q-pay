import './ProfileAvatar.css'

interface ProfileAvatarProps {
  size?: 'sm' | 'md' | 'lg'
}

export default function ProfileAvatar({ size = 'md' }: ProfileAvatarProps) {
  return (
    <div className={`profile-avatar profile-avatar-${size}`} aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="4" fill="rgba(255,255,255,0.4)" />
        <path
          d="M4 20c0-4 3.6-7 8-7s8 3 8 7"
          fill="rgba(255,255,255,0.3)"
        />
      </svg>
    </div>
  )
}
