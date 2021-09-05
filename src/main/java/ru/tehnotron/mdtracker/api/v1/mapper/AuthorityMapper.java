package ru.tehnotron.mdtracker.api.v1.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import ru.tehnotron.mdtracker.api.v1.dto.entity.AuthorityDTO;
import ru.tehnotron.mdtracker.domain.security.Authority;

@Mapper
public interface AuthorityMapper {
    AuthorityDTO authorityToAuthorityDTO(Authority authority);
    @Mapping(target = "users", ignore = true)
    Authority authorityDTOToAuthority(AuthorityDTO authorityDTO);
}
